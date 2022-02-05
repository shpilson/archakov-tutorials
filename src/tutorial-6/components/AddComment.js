import { Button, List, TextField } from "@mui/material";

function AddComment(props) {

    function onClickSubmit(e) {
        e.preventDefault();
        if (e.target.fullName.value && e.target.email.value && e.target.text.value) {
            props.setComments([...props.comments, {
                fullName: e.target.fullName.value,
                createdAt: new Date(),
                email: e.target.email.value,
                text: e.target.text.value
            }])
            e.target.reset();
        }
    }

    return (
        <List>
            <form onSubmit={onClickSubmit}
                style={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    border: '#cfcece solid 1px',
                    margin: '10px',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: "column",
                    gap: '10px'
                }}>
                <p>Обратная связь:</p>
                <TextField name="fullName" label="Имя" variant="outlined" />
                <TextField name="email" label="Почта" variant="outlined" />
                <TextField name="text" label="Текст..." multiline rows={6} variant="outlined" />
                <Button type="submit" variant="contained" size="large" color="primary">
                    Отправить
                </Button>
            </form>
        </List>
    );
}

export default AddComment;