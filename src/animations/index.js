// Fade hacia arriba
export const fadeUp = {

    hidden: {
        opacity: 0,
        y: 60
    },

    show: {

        opacity: 1,

        y: 0,

        transition: {

            duration: .7,

            ease: "easeOut"

        }

    }

};

// Fade desde la izquierda
export const fadeLeft = {

    hidden: {

        opacity:0,

        x:-80

    },

    show:{

        opacity:1,

        x:0,

        transition:{

            duration:.7,

            ease:"easeOut"

        }

    }

};

// Fade desde la derecha
export const fadeRight = {

    hidden:{

        opacity:0,

        x:80

    },

    show:{

        opacity:1,

        x:0,

        transition:{

            duration:.7,

            ease:"easeOut"

        }

    }

};

// Zoom
export const zoomIn = {

    hidden:{

        opacity:0,

        scale:.9

    },

    show:{

        opacity:1,

        scale:1,

        transition:{

            duration:.6

        }

    }

};

// Contenedor
export const staggerContainer = {

    hidden:{},

    show:{

        transition:{

            staggerChildren:.15

        }

    }

};
