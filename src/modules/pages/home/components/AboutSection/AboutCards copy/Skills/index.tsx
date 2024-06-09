import React, { useRef, useState } from "react";
import CardContainer from "../CardContainer";

declare module "matter-js" {
   interface Mouse {
      mousewheel: any;
   }
}
type Props = {
   right?: true;
   left?: true;
};

export default function Skills({ right, left }: Props) {
   const [isCardOn, setIsCardOn] = useState<boolean>(false);
   const onMouseEnter = async () => {
      setIsCardOn(true);
   };
   const onMouseLeave = async () => {
      setIsCardOn(false);
   };

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

   //    for (let i = 0; i < 60; i++) {
   //       let circle = Bodies.circle(i, 10, 20, {
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
      <CardContainer
         tall
         right={right}
         left={left}
         isCardOn={isCardOn}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         <div className="absolute text-center top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5 text-2xl xl:text-3xl 2xl:text-4xl font-black text-white">
            <div>I love</div>
            <div>to try</div>
            <div>new things</div>
         </div>
         <div
            ref={matterContainer}
            className="w-full h-full relative z-10"
         ></div>
      </CardContainer>
   );
}
