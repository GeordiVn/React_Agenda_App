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
export const MONTH_NUMBER = {
    0: "Januari",
    1: "Februari",
    2: "Maart",
    3: "April",
    4: "Mei",
    5: "Juni",
    6: "Juli",
    7: "Augustus",
    8: "September",
    9: "Oktober",
    10: "November",
    11: "December",

}
export const MONTHS_IN_YEAR = [
    {number: 0, month: "Januari"},
    {number: 1, month: "Februari"},
    {number: 2, month: "Maart"},
    {number: 3, month: "April"},
    {number: 4, month: "Mei"},
    {number: 5, month: "Juni"},
    {number: 6, month: "Juli"},
    {number: 7, month: "Augustus"},
    {number: 8, month: "September"},
    {number: 9, month: "Oktober"},
    {number: 10, month: "November"},
    {number: 11, month: "December"},

]

export const COLOR_SCHEME = {
    0: {
        taskNote: {
            contentStyle: {background: '#B5CB99', borderRadius: '10px'},
            overlayStyle: {background: 'rgba(223,229,229,0.29)'},
            arrowStyle: {color: '#000'}
        },
        textBlack: {
            color: 'black'
        },
        textWhite: {
            color: 'white'
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
            backgroundColor: '#FCE09B',
            color: 'black'
        },
        dayForMonth: {
            backgroundColor: '#B5CB99'
        },
        taskNoteBackGround: {
            backgroundColor: '#FCE09B'
        },
        toastStyle: {
            backgroundColor: 'white',
            color: 'black'
        }
    },
    1: {
        taskNote: {
            contentStyle: {background: '#2C3639', borderRadius: '10px', color: 'white'},
            overlayStyle: {background: 'rgba(223,229,229,0.29)'},
            arrowStyle: {color: '#000'}
        },
        section: {
            style: {
                backgroundColor: '#3F4E4F',
                borderRadius: '10px',
                color: 'white',
                marginTop: '1.5rem'
            }
        },
        body: {color: '#2C3639'},
        selectionBar: {
            backgroundColor: '#A27B5C',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            padding: '10px'
        },
        optionBar: {
            backgroundColor: '#A27B5C',
            padding: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            marginTop: '20px'
        },
        buttonCustom: {
            backgroundColor: '#DCD7C9',
            marginRight: '1.5rem',
            color: 'black',
            border: 'none',
            borderRadius: '10px',
            padding: '5px'
        }
        ,
        dayElementToday: {
            backgroundColor: '#A27B5C',
            color: 'white',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px',
            overflowY: 'scroll'
        },
        dayElementNormal: {

            backgroundColor: '#A27B5C',
            color: 'white',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px',
            overflowY: 'scroll'
        },
        monthDayElementEmpty: {
            backgroundColor: '#755b43',
            color: 'white',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px'
        },
        monthTaskInfo: {
            backgroundColor: '#3F4E4F'
        }
        ,
        dayElementMarkToday: {
            backgroundColor: '#DCD7C9',
            color: 'black'
        },
        monthColumnStyle: {
            backgroundColor: '#A27B5C'
        },
        dayForMonth: {
            backgroundColor: '#3F4E4F'
        },
        taskNoteBackGround: {
            backgroundColor: '#3F4E4F'
        },
        toastStyle: {
            backgroundColor: 'black',
            color: 'white'
        }
    },
    2: {
        taskNote: {
            contentStyle: {background: '#1e2124', borderRadius: '10px', color: 'white'},
            overlayStyle: {background: 'rgba(223,229,229,0.29)'},
            arrowStyle: {color: '#000'}
        },
        section: {
            style: {
                backgroundColor: '#36393e',
                borderRadius: '10px',
                color: 'white',
                marginTop: '1.5rem'
            }
        },
        body: {color: '#1e2124'},
        selectionBar: {
            backgroundColor: '#282b30',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            padding: '10px'
        },
        optionBar: {
            backgroundColor: '#282b30',
            padding: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            marginTop: '20px'
        },
        buttonCustom: {
            backgroundColor: '#424549',
            marginRight: '1.5rem',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '5px'
        }
        ,
        dayElementToday: {
            backgroundColor: '#424549',
            color: 'white',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px',
            overflowY: 'scroll'
        },
        dayElementNormal: {

            backgroundColor: '#424549',
            color: 'white',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px',
            overflowY: 'scroll'
        },
        monthDayElementEmpty: {
            backgroundColor: '#1e2124',
            color: 'white',
            borderRadius: '10px',
            marginBottom: '5px',
            marginRight: '5px',
            height: '150px'
        },
        monthTaskInfo: {
            backgroundColor: '#7289da',
            color: 'white'
        }
        ,
        dayElementMarkToday: {
            backgroundColor: '#1e2124'
        },
        monthColumnStyle: {
            backgroundColor: '#424549',
            color: 'white'
        },
        dayForMonth: {
            backgroundColor: '#7289da'

        },
        taskNoteBackGround: {
            backgroundColor: '#424549'
        },
        toastStyle: {
            backgroundColor: 'black',
            color: 'white'
        }
    }


}
