# SuperList Module

SuperList Module Helps create your front-end in seconds

 - Search , Filter , Sort and Paginate with easy integration with your backend API
 - Smooth Clean Design and Responsive, MUI based 
	 ![FrontEnd](https://imgur.com/l112ctJ.png)

## Getting Started
```bash
$ npm i @superalaa/superlist
```

  ```js script
 import  SuperList  from  'SuperList';
import {data} from  './data.js'
function  App() {
	return (
	<>
		<SuperList  data={data}  />
	</>
	);
}
export  default  App; 
  ```
#
 [Live Exmaple in Code SandBox ](https://codesandbox.io/s/superlist-module-kh08ut?file=/src/data.js)
 Try Editing in data.js to get your head around the API docs

## API documentation
|Name|Type|Description  |
|--|--|--|
| pageName |String  | Title of your page	|
|pageSummary|String | Summary or description of your page
|primaryColor|String|The primary color in the module to make the design more adaptive to your theme Ex: primaryColor:"#673ab7"
|searchAttributes|bool| enables the filter part in the search bar 
|searchTitle|String|the search input title to help user what are they searching for
|searchNameQuery|String|for backend purposes when you submit API request the search field data will be in object with property of the searchNameQuery 
|searchAttributesData|Array| The filter part in search bar is an array of objects	for example Object has properties name,label and options for select	 { name:"city",label:"City",options: [{ value:  'Alexandria', label:  'Alexandria' },{ value:  'Cairo', label:  'Cairo' },]},
|categorySection|bool|category section on the left side of the page to enables you filter all the data with specific attributes
|categorySubHeader|String|SubHeader for the category section
|categories|Array|Array of Objects ;Object properties are title,name,categoryIcon with bool value in case you need to add an icon , Icon prop takes Component ,nested propert is bool if you want the menu to be nested with sub categories, subCategories property takes array for objects with same params
|sort|bool| enables you to sort the list
|sortMenu|Array|Array of Object for example [		{title:"Amount High to Low",name:"amount",sort:"DESC"},{title:"Amount Low to High",name:"amount",sort:"ASC"}]
|print|bool|in case you need to print you rows
|addButtonTitle|String| The add button text
|addButtonOnClickFunction|function| pass function whatever you wanna do when you click the button
|headerItem|bool|in case you want have a header for you records
|headerItemComponent|JS Component| the header component
|listItemComponent|JS Component| your record component design with get a param props.content will have your record data
|API|String| your backend API will ge a GET Request with query params of everything that happens in the module serch,sort,filter,pagination data

## Back End Example using Express
```js script
	app.get('/invoices',async  function(req,res){
		let  query = req.query;
		const  limit = parseInt(req.query.limit)
		const  offset = parseInt(req.query.offset)
		let  filters = JSON.parse(query.filter)
		if (filters.client){
			filters.client = {[Op.like]:`%${filters.client}%`}
		}
		let  dbObj = {
			where:filters,
			limit,
			offset,
		}
		if(req.query.sort){
			let  sort = JSON.parse(query.sort);
			dbObj.order = [sort]
		}
		let {count,rows} = await models.invoices.findAndCountAll(dbObj);
		res.send({count,rows}).status(200);
})
```
[NPM](https://www.npmjs.com/package/@superalaa/superlist)
[GitHub](https://github.com/Super3laa/SuperList/tree/master/superlist)