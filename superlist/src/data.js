import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Item from './item';
import HeaderItem from './headerItem';

export const data = {
    pageName:"Cash Transactions",
    pageSummary:"compnay transactions invoices and expenses",
    primaryColor:"#1565c0",
    searchAttributes:true,
    searchTitle:"Search...",
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
            name:'status',
            label:"Status",
            options: [
                { value: 'Paid', label: 'Paid' },
                { value: 'Unpaid', label: 'Unpaid' },
                { value: 'Overdue', label: 'Overdue' },
                { value: 'Draft', label: 'Draft' },

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
        {
            nested:true,
            name:"Status",
            categoryIcon:false,
            subCategories:[
                {
                    name:"Paid",
                    categoryIcon:false,
                },{
                    name:"Unpaid",
                    categoryIcon:false,
                },{
                    name:"Overdue",
                    categoryIcon:false,
                },{
                    name:"Draft",
                    categoryIcon:false,
                },
            ]
        },
    ],
    headerItem : true,
    listItemComponent : Item ,
    headerItemComponent : HeaderItem
}