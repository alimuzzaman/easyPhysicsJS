import { Component, OnInit, ElementRef, ViewChild, Renderer2, Directive, Input } from '@angular/core';
import * as Matter from 'matter-js'


@Component({
  selector: 'app-motion-oscillating',
  templateUrl: './motion-oscillating.component.html',
  styleUrls: ['./motion-oscillating.component.css']
})
export class MotionOscillatingComponent implements OnInit {
  @ViewChild('matterCanvas') matterCanvas:ElementRef;

  constructor() { }

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
    var engine = Engine.create(),
        world = engine.world;

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

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add stiff global constraint
    var body = Bodies.circle(800, 100, 25);

    body.mass = 10;
    body.inverseMass = 1 / body.mass;
    
    var constraint = Constraint.create({
        pointA: { x: 400, y: 100 },
        bodyB: body,
        // pointB: { x: -10, y: -10 }
    });

    World.add(world, [body, constraint]);


    World.add(world, [
        // walls
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
        Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
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

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
  }

}
