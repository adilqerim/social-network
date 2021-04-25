import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {PostType} from "../../../Types/Types";


type MapStatePropsType = {
    posts: Array<PostType>
}

type MapDispatchPropsType = {
    addPost: (newPostBody: string) => void
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
        posts: state.profilePage.posts
})

export default connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps,
    {addPost})(MyPosts);