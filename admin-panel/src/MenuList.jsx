
 import InboxIcon from '@mui/icons-material/MoveToInbox';
 import MailIcon from '@mui/icons-material/Mail';
 


export const menuItems = [
    {
      text: 'Dashboard Overview',
      icon: <InboxIcon />,
      subMenu: [
        { text: 'Sales summary', component:( () => <div>Sales summary component</div> )},
        { text: 'Total revenue', component: (() => <div>1</div>) },
        { text: 'Number of orders', component: (() => <div>2</div>) },
        { text: 'Number of customers', component: () => <div>3</div> },
        { text: 'Top-selling products', component: () => <div>4</div> },
      ],
    },
    {
      text: 'Orders Management',
      icon: <MailIcon />,
      subMenu: [
        { text: 'List of orders', component: () => <div>5</div> },
        { text: 'Order details', component: () => <div>6</div> },
        { text: 'Order status update', component: () => <div>7</div> },
        { text: 'Order filtering (by date, status, etc.)', component: () => <div>7</div> },
        { text: 'Order search', component: () => <div>8</div> },
      ],
    },
    {
      text: 'Products Management',
      icon: <InboxIcon />,
      subMenu: [
        { text: 'List of products', component: () => <div>9</div> },
        { text: 'Product details', component: () => <div>10</div> },
        { text: 'Add/edit/delete products', component: () => <div>11</div> },
        { text: 'Product categories', component: () => <div>12</div> },
        { text: 'Inventory management', component: () => <div>13</div> },
        { text: 'Product search', component: () => <div>14</div> },
      ],
    },
  ];