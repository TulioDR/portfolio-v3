import { ControlsAnimationDefinition } from "framer-motion";

export const initialJumboImg: ControlsAnimationDefinition = {
   x: 0,
   y: 0,
   width: "100%",
   height: "100%",
   transition: { duration: 0.4, ease: [0.645, 0.045, 0.355, 1] },
};
export const initialJumboBackground: ControlsAnimationDefinition = {
   width: "100%",
   transition: { duration: 0.2 },
};
export const exitJumboBackground: ControlsAnimationDefinition = {
   width: 0,
   transition: { duration: 0.2 },
};

export const initialJumboTitle: ControlsAnimationDefinition = {
   y: 0,
   transition: { duration: 0.2 },
};
export const exitJumboTitle: ControlsAnimationDefinition = {
   y: "100%",
   transition: { duration: 0.2 },
};

export const initialModalButtons: ControlsAnimationDefinition = {
   y: 0,
   transition: { duration: 0.2 },
};

export const exitModalButtons: ControlsAnimationDefinition = {
   y: "-100%",
   transition: { duration: 0.2 },
};
