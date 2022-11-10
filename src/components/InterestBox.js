import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import stock from "../assets/stock.jpg"
import { AvatarGroup, Avatar, ListItem, ListItemButton, ListItemText, Box, List, Collapse } from "@mui/material"
import { useState } from "react"

const InterestBox = ({ interest }) => {

    const [expand, setExpand] = useState(false);
    const array = ["First", "Second", "Third", "Fourth"]

    return (
        <>
            <Box className="individual-interest-container">
                <List>
                    <ListItem>
                        <ListItemButton onClick={() => {
                            if (expand) {
                                setExpand(false)
                            } else setExpand(true)
                        }}>
                            <h1>{interest.interestType}</h1>
                            <AvatarGroup className="interest-avatar-container" total={24}>
                                <Avatar alt="" src={image1} />
                                <Avatar alt="" src={image2} />
                                <Avatar alt="" src={image3} />
                            </AvatarGroup>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Collapse in={expand}>
                    <List sx={{ background: "lightgrey" }}>
                        {array.map((listElement) => (
                            <ListItem key={listElement}>
                                <ListItemText primary={listElement} /> 
                            </ListItem>
                        ))}
                    </List>
                </Collapse>

            </Box>
        </>
    )
}

export default InterestBox;