import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Container,
    Background,
    ButtonLink,
    Logo,
    Feature,
    Text,
    FeatureCallOut,
    Link,
    Group,
    Profile,
    Picture,
    Dropdown,
    Search,
    SearchIcon,
    SearchInput
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }){
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false);

    return (
    <Search {...restProps}>
        <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
            <img src={"/images/icons/search.png"} alt="Search"/>
        </SearchIcon>
        <SearchInput 
            value={searchTerm} onChange={({target}) => setSearchTerm(target.value)} 
            placeholder="Search films and series" 
            active={searchActive} 
        />
    </Search>
    )
}

Header.FeatureCallOut = function HeaderCallOut({children, ...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Profile = function HeaderProfile({children, ...restProps}){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({src, ...restProps}){
    return <Picture {...restProps} src={`/images/users/${src}.png`}></Picture>
}

Header.Group = function HeaderGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Logo = function HeaderFrame({to, ...restProps}){
    return(
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}
