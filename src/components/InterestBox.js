import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import stock from "../assets/stock.jpg"
import { AvatarGroup, Avatar, ListItem, ListItemButton, ListItemText, Grid, List, Collapse } from "@mui/material"
import { useState } from "react"

const InterestBox = ({ interest }) => {

    const [expand, setExpand] = useState(false);
    const array = ["First", "Second", "Third", "Fourth"]

    return (
        <>
            <Grid className="individual-interest-container">
                <List>
                    <ListItem sx={{
                        border:'1px solid black',
                        borderRadius:'10px',
                        "&:hover": {
                            transform: 'scale(1.05)',
                          }
                    }}>
                        <ListItemButton onClick={() => {
                            if (expand) {
                                setExpand(false)
                            } else setExpand(true)
                        }}>
                            <Grid item xs={12} id="top-row" container>
                                <h1>{interest.interestType}</h1>
                            </Grid>
                            <Grid item xs={12} id="bottom-row" container>
                                <AvatarGroup className="interest-avatar-container" total={10}>
                                    <Avatar alt="" src={image1} />
                                    <Avatar alt="" src={image2} />
                                    <Avatar alt="" src={image3} />
                                </AvatarGroup>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                </List>
                {/* <Collapse in={expand}>
                    <List sx={{ background: "lightgrey" }}>
                        {array.map((listElement) => (
                            <ListItem key={listElement}>
                                <ListItemText primary={listElement} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse> */}

            </Grid>
        </>
    )
}

export default InterestBox;