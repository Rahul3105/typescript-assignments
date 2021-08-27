import {TodosType} from './Todo'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import  Box  from '@material-ui/core/Box'
interface TodosItem {
    title: string,
    id: number,
    status: boolean,
    onToggle: () => void,
    onDelete: () => void,
    handleModal:()=> void
}
const TodoItem = ({ title, status, id , onToggle, onDelete, handleModal }: TodosItem) =>  {
    return <StyledCard key={id}>
        <Typography className = {`title ${status ? 'yes' : 'no'}`} >{title}</Typography>
        <Box className='button-cont'>
            <Button variant="contained" color="secondary" onClick={onToggle}>{status ? 'Mark as uncompleted' : 'Mark as completed'}</Button>
        </Box>
        <Box className='button-cont'>
            <Button variant="contained" color="secondary" onClick={onDelete}>Delete</Button>
            <Button variant="contained" color="secondary" onClick ={handleModal} >Update</Button>
        </Box>
    </StyledCard>

}

const StyledCard = styled(Card)`
    width: 300px;
    margin: auto;
    margin-top: 30px;
    .title {
        font-size: 20px;
        margin:10px 0;
    }
    .yes {
        text-decoration: line-through;
        color:red;
    }
    .no {
        color:lime;
    }
    .button-cont {
        margin-bottom:10px ;
    }
    .button-cont > button {
        margin-left: 10px;
    }
`;
export { TodoItem }