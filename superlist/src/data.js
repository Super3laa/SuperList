import DraftsIcon from '@mui/icons-material/Drafts';

export const data = {
    searchAttributes:true,
    searchAttributesData:[
        {
            name:"flavour",
            label:"Flavour",
            options: [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
            ]
        },
        {
            name:"drink",
            label:"Drink",
            options: [
                { value: 'TurkishCoffe', label: 'TurkishCoffe' },
                { value: 'Cappuccino', label: 'Cappuccino' },
                { value: 'Latte', label: 'Latte' }
            ]
        },
        {
            name:'topping',
            label:"Topping",
            options: [
                { value: 'WhippedCream', label: 'WhippedCream' },
                { value: 'Nuts', label: 'Nuts' },
                { value: 'CocoPowder', label: 'CocoPowder' }
            ]
        }
    ],
    categorySection:true,
    categorySubHeader:"Categories",
    categories:[
        {
            nested:true,
            name:"Category 1",
            categoryIcon:true,
            Icon:<DraftsIcon />,
            subCategories:[
                {
                    name:"subCategory1",
                    categoryIcon:true,
                    Icon:<DraftsIcon />, 
                }
            ]
        },
        {
            nested:false,
            name:"Category 2",
            categoryIcon:false,
        },
        {
            nested:true,
            name:"Category 3",
            categoryIcon:true,
            Icon:<DraftsIcon />,
            subCategories:[
                {
                    name:"subCategory1",
                    subCategoryIcon:true,
                    Icon:<DraftsIcon />, 
                },{
                    name:"subCategory2",
                    subCategoryIcon:false,
                }
            ]
        },

    ]
}