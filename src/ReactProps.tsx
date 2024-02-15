interface AppHeadersProps {
    headerTitle: string;
}

function AppHeader(props: AppHeadersProps) {
    return <h1>{props.headerTitle}</h1>;
}

export default AppHeader;