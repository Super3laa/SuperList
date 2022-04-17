import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Item from './item';
import HeaderItem from './headerItem';

export const data = {
    pageName:"Cash Transactions",
    pageSummary:"compnay transactions invoices",
    primaryColor:"#673ab7",
    searchAttributes:true,
    searchTitle:"Search...",
    searchNameQuery:"client",
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
            title:"Cities",
            name:"city",
            categoryIcon:true,
            Icon:<LocationOnIcon />,
            subCategories:[
                {
                    name:"Alexandria",
                    title:"Alexandria",
                    categoryIcon:false,
                },{
                    name:"Cairo",
                    title:"Cairo",
                    categoryIcon:false,
                }
            ]
        },
        {
            nested:true,
            title:"Branches",
            name:"branch",
            categoryIcon:true,
            Icon:<ApartmentIcon />,
            subCategories:[
                {
                    name:"Smouha",
                    title:"Smouha",
                    categoryIcon:false,
                },{
                    name:"5th Settlement",
                    title:"5th Settlement",
                    categoryIcon:false,
                },{
                    name:"6 October",
                    title:"6 October",
                    categoryIcon:false,
                },
            ]
        },
        {
            nested:true,
            title:"Status",
            name:'status',
            categoryIcon:false,
            subCategories:[
                {
                    name:"Paid",
                    title:"Paid",
                    categoryIcon:false,
                },{
                    name:"Unpaid",
                    title:"Unpaid",
                    categoryIcon:false,
                },{
                    name:"Overdue",
                    title:"Overdue",
                    categoryIcon:false,
                },{
                    name:"Draft",
                    title:"Draft",
                    categoryIcon:false,
                },
            ]
        },
    ],
    sort:true,
    print:true,
    sortMenu:[
        {title:"Amount High to Low",name:"amount",sort:"DESC"},
        {title:"Amount Low to High",name:"amount",sort:"ASC"},
        {title:"Date ASC",name:"date",sort:"ASC"},
        {title:"Date DESC",name:"date",sort:"DESC"},
        {title:"Status",name:"status",sort:"ASC"}
    ],
    headerItem : true,
    listItemComponent : Item ,
    headerItemComponent : HeaderItem,
    API:'http://localhost:5000/invoices'
}