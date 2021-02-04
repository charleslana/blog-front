import PostInterface from "./interfaces/PostInterface";
import PostCategoryEnum from "./interfaces/enums/PostCategoryEnum";

class Posts {
    static items: PostInterface[] = [
        {
            id: 1,
            title: 'Title 1 containing information from the initial title of the post',
            description: 'Description 1 of the post, this post will be cut because it is to be read by clicking on it.',
            category: PostCategoryEnum.LINUX
        },
        {
            id: 2,
            title: 'Title 2 containing information from the initial title of the post',
            description: 'Description 2 of the post, this post will be cut because it is to be read by clicking on it.',
            category: PostCategoryEnum.REACT
        },
        {
            id: 3,
            title: 'Title 3 containing information from the initial title of the post',
            description: 'Description 3 of the post, this post will be cut because it is to be read by clicking on it.',
            category: PostCategoryEnum.TYPESCRIPT
        },
        {
            id: 4,
            title: 'Title 4 containing information from the initial title of the post',
            description: 'Description 4 of the post, this post will be cut because it is to be read by clicking on it.',
            category: PostCategoryEnum.JAVASCRIPT
        },
        {
            id: 5,
            title: 'Title 5 containing information from the initial title of the post',
            description: 'Description 5 of the post, this post will be cut because it is to be read by clicking on it.',
            category: PostCategoryEnum.JAVA
        },
        {
            id: 6,
            title: 'Title 6 containing information from the initial title of the post',
            description: 'Description 6 of the post, this post will be cut because it is to be read by clicking on it.',
            category: PostCategoryEnum.ANGULAR
        },
        {
            id: 7,
            title: 'Title 7 containing information from the initial title of the post',
            description: 'Description 7 of the post, this post will be cut because it is to be read by clicking on it.',
            category: PostCategoryEnum.VUE
        },
        {
            id: 8,
            title: 'Title 8 containing information from the initial title of the post',
            description: 'Description 8 of the post, this post will be cut because it is to be read by clicking on it.',
            category: PostCategoryEnum.OTHERS
        },
        {
            id: 9,
            title: 'Title 9 containing information from the initial title of the post',
            description: 'Description 9 of the post, this post will be cut because it is to be read by clicking on it.',
            category: PostCategoryEnum.LINUX
        },
        {
            id: 10,
            title: 'Title 10 containing information from the initial title of the post',
            description: 'Description 10 of the post, this post will be cut because it is to be read by clicking on it.',
            category: PostCategoryEnum.REACT
        }
    ]
}

export default Posts;