const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query, { variables } = {}) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`, 
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();
    if(json.errors) {
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

export async function getFeaturedProducts() {
    const data = await fetchCmsAPI(`
    {
      allProducts (filter: {productFeatured: {eq: "true"}}) {
        id
        title
        featuredImage {
          url
        }
        shortDescription
        preco
        productState
      }
    
      _allProductsMeta {
        count
      }
    }
    `);

    return data.allProducts;
}

export async function getLastProducts() {
  const data = await fetchCmsAPI(`
  {
    allProducts (first: "5", orderBy: _createdAt_DESC) {
      id
      title
      featuredImage {
        url
      }
      shortDescription
      preco
    }
  
    _allProductsMeta {
      count
    }
  }
  `);

  return data.allProducts;
}

export async function getAllProducts() {
  const data = await fetchCmsAPI(`
  {
    allProducts (orderBy: _createdAt_DESC) {
      id
      title
      featuredImage {
        url
      }
      shortDescription
      preco
    }
  
    _allProductsMeta {
      count
    }
  }
  `);

  return data.allProducts;
}

export async function getFilterProducts(id) {
  const data = await fetchCmsAPI(`
  {
    allProducts (filter: {id: {eq: ${id}}}) {
      id
      title
      featuredImage {
        url
      }
      shortDescription
      preco
      productState
      gallery {
        id
        url
      }
    }
  
    _allProductsMeta {
      count
    }
  }
  `);

  return data.allProducts;
}

export async function getCategories() {
  const data = await fetchCmsAPI(`
  {
    allProductCategories(orderBy: categoryTitle_ASC) {
      categoryTitle
    }
  }
  `);

  return data.allProductCategories;
}



export default { getFeaturedProducts, getLastProducts, getCategories, getAllProducts, getFilterProducts }