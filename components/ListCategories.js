const ListCategories = (props) => (

        props.cat.map(item => (
            <li key={item.id}><a className="dropdown-item" href="#">{item.categoryTitle}</a></li>
        ))


)

export default ListCategories;