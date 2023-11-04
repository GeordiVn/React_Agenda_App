export const dayNames = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];
export const dayNameNumbers = {
    maandag: 1, dinsdag: 2, woensdag: 3, donderdag: 4, vrijdag: 5, zaterdag: 6, zondag: 7
};
export const dayNumberNames = {
    1: "Maandag", 2: 'Dinsdag', 3: 'Woensdag', 4: 'Donderdag', 5: 'Vrijdag', 6: 'Zaterdag', 7: 'Zondag'
};
export const priorityColor = {
    0: 'white', 1: 'orange', 2: 'red'
}

export const COLOR_SCHEME = {
    light: {
        taskNote: {
            contentStyle: {background: '#B5CB99', borderRadius: '10px'},
            overlayStyle: {background: 'rgba(223,229,229,0.29)'},
            arrowStyle: {color: '#000'}
        },
        section: {
            style: {
                backgroundColor: '#B5CB99',
                borderRadius: '10px',
                color: 'white',
                marginTop: '1.5rem'
            }
        }
    },


    dark: {
        taskNote: {
            contentStyle: {background: '#B5CB99', borderRadius: '10px'},
            overlayStyle: {background: 'rgba(223,229,229,0.29)'},
            arrowStyle: {color: '#000'}
        },
        section: {
            style: {
                backgroundColor: '#111110',
                borderRadius: '10px',
                color: 'white',
                marginTop: '1.5rem'
            }
        }
    }
}