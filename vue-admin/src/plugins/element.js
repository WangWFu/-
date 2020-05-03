import Vue from 'vue'
import { 
    Button,
     Form, 
     FormItem,
      Input,
       Message,
    Table,
    TableColumn,
    Container,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Header,
    Main,
    Menu, 
    Submenu, 
    MenuItem,
     Aside,
     Breadcrumb,
     BreadcrumbItem,
     Card,
     Row,
     Col, 
     Switch,
     Tooltip,
     Pagination,
     Dialog,
     MessageBox
 } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Container)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Aside)
Vue.use( Breadcrumb )
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Switch)
Vue.use( Tooltip )
Vue.use(Pagination)
Vue.use(Dialog)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox

