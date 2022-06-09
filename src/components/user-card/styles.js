import colors from "../../utils/colors/colors";

const styles = {
    userCard: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.borderLight,
        overflow: 'hidden',
        marginBottom: 25
    },
    frameCard: {
        margin: '20px 10px',
        padding: '5px 2px',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.borderThick,
        backgroundColor: colors.backGroundAsh
    },
    imageCard: {
        borderRadius: '50%',
        borderWidth: 0,
        overflow: 'hidden'
    },
    nameLabel: { 
        fontFamily: 'sans-serif', 
        fontSize: 20, 
        fontWeight: '600' 
    },
}

export default styles