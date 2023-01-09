interface IAppLayoutProps {
    children: JSX.Element | JSX.Element[]
}


export const AppLayout = ({ children }: IAppLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    );
};
