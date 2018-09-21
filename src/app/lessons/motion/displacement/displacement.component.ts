import { Component, OnInit, ElementRef, ViewChild, Renderer2, Directive, Input, SimpleChanges, OnChanges } from '@angular/core';
import * as Matter from 'matter-js';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-displacement',
    templateUrl: './displacement.component.html',
    styleUrls: ['./displacement.component.css']
})
export class DisplacementComponent implements OnInit {
    @ViewChild('matterCanvas') matterCanvas: ElementRef;

    public eqChanged = [];

    public angle = 0;
    public initialVelocity = 0.12;
    public time = 23.49851438440039;
    public acceleration = 2;
    public displacement = 555;


    public v = {};
    public timer = 0;
    public timePrev = 0;
    public timeEleps = 0;

    public ball: Matter.Body;

    public xyz;
    constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Composites = Matter.Composites,
            Constraint = Matter.Constraint,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            World = Matter.World,
            Bodies = Matter.Bodies;

        // create engine
        var engine = Engine.create();
        var world = engine.world;
        // engine.positionIterations = 60;
        // engine.velocityIterations = 60;
        engine.timing.timeScale = 0.1;
        world.gravity.scale = 0;
        world.gravity.x = 0;
        world.gravity.y = 0;
        // create renderer
        var render = Render.create({
            element: this.matterCanvas.nativeElement,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                showAngleIndicator: true
            }
        });
        Render.run(render);
        console.log(engine);

        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

        // add stiff global constraint
        var body = this.ball = Bodies.circle(0, 300, 25, {
            frictionAir: 0,
            // mass: 30,
            // inverseMass: 1 / 30,
        });

        World.add(world, [body]);
        World.add(world, [
            // walls
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
            // Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
        ]);

        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    // allow bodies on mouse to rotate
                    angularStiffness: 0,
                    render: {
                        visible: false
                    }
                }
            });

        // World.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 }
        });

        // context for MatterTools.Demo
        this.xyz = {
            engine: engine,
            world: world,
            runner: runner,
            render: render,
            canvas: render.canvas,
            stop: function () {
                Matter.Render.stop(render);
                Matter.Runner.stop(runner);
            }
        };

    }

    stop() {
        let _this = this;
        let url: string = this.router.url.toString();
        this.router.navigate(['lessons.ts']).then(function(){
          _this.router.navigate([url]);
        });
    }

    start() {
        var ball = this.ball;
        ball.label = "This is a ";
        this.xyz.engine.timing.timeScale = 0.1;
        // Matter.Body.applyForce(ball, {x: ball.position.x,y: ball.position.y}, {x: 0.05,y: 0});
        Matter.Body.setAngle(ball, this.angle);
        Matter.Body.setVelocity(ball, { x: this.initialVelocity /8, y: 0 });
        Matter.Events.on(this.xyz.runner, "beforeUpdate", this.beforeUpdate);
        console.log(typeof this.initialVelocity);
        this.timer = Date.now();


    }


    beforeUpdate = (event) => {
        this.v = { v: this.ball.velocity.x, x: this.ball.position.x, p: this.ball.position };
        this.timeEleps += event.source.delta / 1000;

        var x = this.ball.velocity.x + (event.source.delta / 1000 * this.acceleration);
        var X = (this.acceleration * this.timeEleps + this.initialVelocity);
        Matter.Body.setVelocity(this.ball, { x: X, y: 0 });
        

        if(this.ball.position.x >= this.displacement || this.timeEleps >= this.time){
            Matter.Events.off(this.xyz.runner, "beforeUpdate", this.beforeUpdate);
            Matter.Body.setVelocity(this.ball, { x: 0, y: 0 });
            return false;
        }

    }


    ngOnChanges(item: string) {
        // return;
        if(this.eqChanged.includes(item))
            return;
            
        if (this.eqChanged.length >= 3) {
            var removed = this.eqChanged.shift();
            this.calculateValue(removed);
        }
        this.eqChanged.push(item);
        console.log(this.eqChanged);
    }

    calculateValue(removed) {
        var u = this.initialVelocity,
            t = this.time,
            a = this.acceleration,
            s = this.displacement;

        switch (removed) {
            case 'initialVelocity':
                // u = ?
                this.initialVelocity = s / t - 0.5 * a * t;
                break;
            case 'time':
                //   t = ?
                this.time = (-u + Math.sqrt(u * u + 2 * a * s)) / a;
                break;
            case 'acceleration':
                //   a = ?
                this.acceleration = 2 * s / (t * t) - 2 * u / t;
                break;
            case 'displacement':
                //   s = ?
                this.displacement = u * t + 0.5 * a * t * t ;
                break;

            default:
                break;
        }
    }

}
