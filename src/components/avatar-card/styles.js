import colors from "../../utils/colors/colors";

const styles = {
    outterCard: {
        borderRadius: 20,
        margin: 30,
        backgroundColor: colors.backGroundAsh, 
        borderWidth: 2, 
        borderColor: colors.borderThick
    },
    middleCard: {
        borderRadius: 20,
        margin: 20,
    },
    innerCard: {
        borderRadius: '50%',
        overFlow: 'hidden',
        margin: 10,
    },
    avatarImage: {
        borderRadius: '50%',
    },
}

export default styles;