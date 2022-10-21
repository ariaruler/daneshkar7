import {Button, Grid, Typography} from "@mui/material";
import rowTable from "../../data/home/rowTable";

const TableContact = () => {
    return(
        <Grid container>
            <Grid container alignItems={'center'} flexDirection={'row'} p={2}>
                {rowTable.map( row => (
                    <Grid p={2} key={row.id}>
                        <Typography>
                            {row.title.toUpperCase()}: {row.title}
                        </Typography>
                    </Grid>
                ))}
                <Grid p={2}>
                    <Button variant={'outlined'} color={'error'}>
                        DELETE
                    </Button>
                </Grid>
                <Grid p={2}>
                    <Button variant={'outlined'}>
                        INFO
                    </Button>
                </Grid>
                <Grid p={2}>
                    <Button  variant={'outlined'} color={'secondary'}>
                        CHECK TODO
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TableContact