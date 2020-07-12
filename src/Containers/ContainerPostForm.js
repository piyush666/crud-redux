import { PostForm } from '../PostForm';
import { connect } from 'react-redux';

const mapDispatchToPostFormProps = (dispatch) => (
    {
        onSubmit: (data) => (
            dispatch({
                type: 'ADD_POST',
                data: data
            })
        )
    }
)

export const ContainerPostForm = connect(
    null,
    mapDispatchToPostFormProps
)(PostForm);