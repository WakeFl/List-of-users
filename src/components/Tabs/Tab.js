const Tab = ({ id, title, body }) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <h4>ID {id}</h4>
            <h5>{title}</h5>
            {body && <p>{body}</p>}
        </div>
    );
};

export default Tab;