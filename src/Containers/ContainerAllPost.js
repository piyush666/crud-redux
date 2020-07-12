import { AllPost } from '../AllPost';
import { connect } from 'react-redux';

const mapStateToAllPostProps = (state) => (
    {
        posts: state
    }
)
const mapDispatchToAllPostProps = (dispatch) => (
    {
        onDeleteClick: (id) => (
            dispatch({
                type: 'DELETE_POST',
                id,
            })
        ),
        onEditFormSubmit: (data) => (
            dispatch({
                type: 'UPDATE_POST',
                data,
            })
        )

    }
)

export const ContainerAllPost = connect(
    mapStateToAllPostProps,
    mapDispatchToAllPostProps
)(AllPost);