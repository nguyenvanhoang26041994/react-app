import Menu from './Menu';
import MenuItem from './Menu.Item';
import GroupItem from './Menu.GroupItem';
import SubMenu from './Menu.SubMenu';

Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;
Menu.GroupItem = GroupItem;

export default Menu;
export { MenuItem, GroupItem, SubMenu };
