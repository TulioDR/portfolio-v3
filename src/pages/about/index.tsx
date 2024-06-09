import { useRef } from "react";

declare module "matter-js" {
   interface Mouse {
      mousewheel: any;
   }
}

type Props = {};

export default function AboutPage({}: Props) {
   const matterContainer = useRef<HTMLDivElement>(null);

   // var Engine = Matter.Engine,
   //    Render = Matter.Render,
   //    Runner = Matter.Runner,
   //    Bodies = Matter.Bodies,
   //    Composite = Matter.Composite,
   //    Mouse = Matter.Mouse;

   // create an engine

   // useEffect(() => {
   //    const groundThickness = 60;
   //    const container = matterContainer.current!;
   //    var engine = Engine.create();

   //    var render = Render.create({
   //       element: matterContainer.current!,
   //       engine: engine,
   //       options: {
   //          background: "transparent",
   //          height: container.clientHeight,
   //          width: container.clientWidth,
   //          wireframes: false,
   //          showAngleIndicator: false,
   //       },
   //    });

   //    for (let i = 0; i < 50; i++) {
   //       let circle = Bodies.circle(i, 10, 30, {
   //          friction: 0.3,
   //          frictionAir: 0.00001,
   //          restitution: 0.8,
   //       });
   //       Composite.add(engine.world, circle);
   //    }

   //    var ceiling = Bodies.rectangle(
   //       container.clientWidth / 2,
   //       0 - groundThickness / 2,
   //       container.clientWidth,
   //       groundThickness,
   //       { isStatic: true }
   //    );
   //    var ground = Bodies.rectangle(
   //       container.clientWidth / 2,
   //       container.clientHeight + groundThickness / 2,
   //       container.clientWidth,
   //       groundThickness,
   //       { isStatic: true }
   //    );
   //    var leftWall = Bodies.rectangle(
   //       0 - groundThickness / 2,
   //       container.clientHeight / 2,
   //       groundThickness,
   //       container.clientHeight,
   //       { isStatic: true }
   //    );
   //    var rightWall = Bodies.rectangle(
   //       container.clientWidth + groundThickness / 2,
   //       container.clientHeight / 2,
   //       groundThickness,
   //       container.clientHeight,
   //       { isStatic: true }
   //    );

   //    // add all of the bodies to the world
   //    Composite.add(engine.world, [ground, leftWall, rightWall, ceiling]);

   //    const mouse = Mouse.create(render.canvas);
   //    const mouseConstraint = Matter.MouseConstraint.create(engine, {
   //       mouse: mouse,
   //       constraint: {
   //          stiffness: 0.2,
   //          render: { visible: false },
   //       },
   //    });
   //    Composite.add(engine.world, mouseConstraint);
   //    mouseConstraint.mouse.element.removeEventListener(
   //       "mousewheel",
   //       mouseConstraint.mouse.mousewheel
   //    );
   //    mouseConstraint.mouse.element.removeEventListener(
   //       "DOMMouseScroll",
   //       mouseConstraint.mouse.mousewheel
   //    );

   //    Render.run(render);
   //    var runner = Runner.create();
   //    Runner.run(runner, engine);

   //    return () => {
   //       Render.stop(render);
   //       Runner.stop(runner);
   //    };
   // }, []);

   return (
      <>
         <div className=" w-full bg-about h-screen p-10 pb-20">
            <div
               ref={matterContainer}
               className="w-full h-full border border-black rounded-xl overflow-hidden relative"
            ></div>
         </div>
         <div className="bg-red-500 w-full h-screen"></div>
      </>
   );
}
