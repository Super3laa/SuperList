import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Item from './item';
import HeaderItem from './headerItem';

export const data = {
    pageName:"Cash Transactions",
    pageSummary:"compnay transactions invoices and expenses",
    primaryColor:"#1565c0",
    searchAttributes:true,
    searchAttributesData:[
        {
            name:"city",
            label:"City",
            options: [
                { value: 'Alexandria', label: 'Alexandria' },
                { value: 'Cairo', label: 'Cairo' },
            ]
        },
        {
            name:"branch",
            label:"Branch",
            options: [
                { value: 'Smouha', label: 'Smouha' },
                { value: '5th settlement', label: '5th Settlement' },
                { value: '6 october', label: '6 October' }
            ]
        },
        {
            name:'Transaction',
            label:"Transaction",
            options: [
                { value: 'invoices', label: 'Invoices' },
                { value: 'expenses', label: 'expenses' },
            ]
        }
    ],
    categorySection:true,
    categorySubHeader:"Filter",
    categories:[
        {
            nested:true,
            name:"Cities",
            categoryIcon:true,
            Icon:<LocationOnIcon />,
            subCategories:[
                {
                    name:"Alexandria",
                    categoryIcon:false,
                },{
                    name:"Cairo",
                    categoryIcon:false,
                }
            ]
        },
        {
            nested:true,
            name:"Branches",
            categoryIcon:true,
            Icon:<ApartmentIcon />,
            subCategories:[
                {
                    name:"Smouha",
                    categoryIcon:false,
                },{
                    name:"5th Settlement",
                    categoryIcon:false,
                },{
                    name:"6 October",
                    categoryIcon:false,
                },
            ]
        },
    ],
    headeItem : true,
    listItemComponent : Item ,
    headerItem : HeaderItem
}