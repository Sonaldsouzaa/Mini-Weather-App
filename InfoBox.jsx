import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <div>Humidity: {info.humidity}&deg;C</div>
                        <div>Temperature: {info.temp}&deg;C</div>
                        <div>Min Temperature: {info.temp_min}&deg;C</div>
                        <div>Max Temperature: {info.temp_max}&deg;C</div>
                        <div>Feels like: {info.weather}</div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}