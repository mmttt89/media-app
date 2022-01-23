
import React from 'react';
import { AppLayoutContainer, AppText, AppPost } from '@components/index';

const data = {
    user: {
        id: "id of user",
        name: "Orginal page",
        imageUrl: "https://i.picsum.photos/id/176/200/300.jpg?grayscale&hmac=Jdj7SwPo39coGPNTY3C3uRMWWUNWrDo5rOqcS6Gwgf0",
        postUrl: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
    },
    caption: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Contrary to popular belief",
    likes: 73,
    comments: 24,
}

const Layout = () => {
    return (
        <AppLayoutContainer>
            <AppPost data={data} />
        </AppLayoutContainer>
    );
};

export default Layout;


