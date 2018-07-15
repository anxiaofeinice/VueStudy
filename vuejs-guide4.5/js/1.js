var vue = new Vue({
    el: "div",
    data: {
        mf: true,
        content: {

            margin: "100px auto",
            border: "1px solid white",
            width: '500px',
            height: '500px',
            borderRadius: "100%",
            background: 'black',
            position: "relative",
            animation: 'move 3s infinite linear ',
        },
        Cirle: {
            width: '500px',
            height: '500px',
            border: '1px solid black',
            borderRadius: "100%",

        },
        cirleBlack: {
            width: '250px',
            height: '500px',
            background: 'black',
            borderTopLeftRadius: "250px",
            borderBottomLeftRadius: "250px",
            position: 'absolute',
            top: 0,
            left: 0,
        },
        cirleWhite: {
            width: '250px',
            height: '500px',
            background: 'white',
            borderTopRightRadius: "250px",
            borderBottomRightRadius: "250px",
            position: 'absolute',
            top: 0,
            left: '250PX',
        },

        cirleB: {
            width: '250px',
            height: '250px',
            background: 'white',
            borderRadius: "100%",
            top: 0,
            left: '125px',
            position: 'absolute',
        },
        cirleW: {
            width: '250px',
            height: '250px',
            background: 'black',
            borderRadius: "100%",
            top: '250px',
            left: '125px',
            position: 'absolute',

        },
        cirleBb: {
            width: '80px',
            height: '80px',
            background: 'black',
            borderRadius: "100%",
            top: '85px',
            left: '205px',
            position: 'absolute',
        },
        cirleWw: {
            width: '80px',
            height: '80px',
            background: 'white',
            borderRadius: "100%",
            top: '335px',
            left: '205px',
            position: 'absolute',
        },

    }

})