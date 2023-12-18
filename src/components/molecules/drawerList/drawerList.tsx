import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuButtonModel } from "../../context/userContext";
import DrawerListModule from "./drawerList.module.scss";

interface DrawerListModel{
    arr: MenuButtonModel[]
}

const DrawerList: FC<DrawerListModel> = ({ arr }) => {
    return (
        <List className={DrawerListModule.drawerList}>
          {arr.map((button: MenuButtonModel) => (
            <Link className={DrawerListModule.drawerListLink} key={button.key} to={button.routes}>
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