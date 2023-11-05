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

export const MONTHS_IN_YEAR = [
    {number: 0, month: "januari"},
    {number: 1, month: "februari"},
    {number: 2, month: "maart"},
    {number: 3, month: "april"},
    {number: 4, month: "mei"},
    {number: 5, month: "juni"},
    {number: 6, month: "juli"},
    {number: 7, month: "augustus"},
    {number: 8, month: "september"},
    {number: 9, month: "oktober"},
    {number: 10, month: "november"},
    {number: 11, month: "december"},

]

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
        },
        body: {color: '#186F65'},
        selectionBar: {
            backgroundColor: '#B2533E',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            padding: '10px'
        },
        optionBar: {
            backgroundColor: '#B2533E',
            padding: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            marginTop: '20px'
        },
        buttonCustom: {
            backgroundColor: '#FCE09B',
            marginRight: '1.5rem',
            color: 'black',
            border: 'none',
            borderRadius: '10px',
            padding: '5px'
        }
        ,
        dayElementToday: {
            backgroundColor: '#FCE09B',
            color: 'white',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px',
            overflowY: 'scroll'
        },
        dayElementNormal: {

            backgroundColor: '#FCE09B',
            color: 'black',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px',
            overflowY: 'scroll'
        },
        monthDayElementEmpty: {
            backgroundColor: '#d1c7b0',
            color: 'black',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px'
        },
        monthTaskInfo: {
            backgroundColor: '#B5CB99'
        }
        ,
        dayElementMarkToday: {
            backgroundColor: '#B2533E'
        },
        monthColumnStyle: {
            backgroundColor: '#FCE09B'
        },
        dayForMonth: {
            backgroundColor: '#B5CB99'
        },
        taskNoteBackGround: {
            backgroundColor: '#FCE09B'
        }
    },
    dark: {
        taskNote: {
            contentStyle: {background: '#8ffd02', borderRadius: '10px'},
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
        },
        body: {color: '#e8dedb'},
        selectionBar: {
            backgroundColor: '#78b942',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            padding: '10px'
        },
        optionBar: {
            backgroundColor: '#3e51b2',
            padding: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            marginTop: '20px'
        },
        buttonCustom: {
            backgroundColor: '#fc9bc0',
            marginRight: '1.5rem',
            color: 'black',
            border: 'none',
            borderRadius: '10px',
            padding: '5px'
        }
        ,
        dayElementToday: {
            backgroundColor: 'rgba(246,177,6,0.91)',
            color: 'white',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px',
            overflowY: 'scroll'
        },
        dayElementNormal: {
            backgroundColor: 'rgba(155,174,252,0.89)',
            color: 'black',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px',
            overflowY: 'scroll'
        },
        monthDayElementEmpty: {
            backgroundColor: '#d1b0b0',
            color: 'black',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px'
        },
        monthTaskInfo: {
            backgroundColor: '#99c4cb'
        },
        dayElementMarkToday: {
            backgroundColor: '#65b23e'
        },
        monthColumnStyle: {
            backgroundColor: '#f1ad05'
        },
        dayForMonth: {
            backgroundColor: '#8ffd03'
        },
        taskNoteBackGround: {
            backgroundColor: '#443b21'
        }
    }

}