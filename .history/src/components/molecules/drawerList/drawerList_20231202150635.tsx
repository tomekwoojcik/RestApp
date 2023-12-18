import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuButtonModel } from "../../context/userContext";

const DrawerList: FC<MenuButtonModel[]> = (arr) => {
    return (
        <List>
          {arr.map((button: MenuButtonModel) => (
            <Link key={button.key} to={button.routes}>
              <ListItem
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>{button.icons}</ListItemIcon>
                  <ListItemText primary={button.buttonName} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
    )
    
}

export default DrawerList