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
        slug
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
    allProducts (first: "9", orderBy: _createdAt_DESC) {
      id
      title
      featuredImage {
        url
      }
      shortDescription
      preco
      productState
      slug
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

export async function getFilterProducts(slug) {
  const data = await fetchCmsAPI(`
  {
    allProducts (filter: {slug: {eq: "${slug}"}}) {
      id
      title
      featuredImage {
        url
      }
      shortDescription
      preco
      productState
      slug
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

export async function getCategoryProducts(slug) {
  const data = await fetchCmsAPI(`
  {
    allProducts (filter: {category: {eq: "${slug}"}}) {
      id
      title
      featuredImage {
        url
      }
      shortDescription
      preco
      productState
      slug
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
      slugCategory
    }
  }
  `);

  return data.allProductCategories;
}

export async function getFilterCategories(slug) {
  const data = await fetchCmsAPI(`
  {
    allProductCategories(filter: {slugCategory: {eq: "${slug}"}}) {
      id
      slugCategory
      categoryTitle
    }
  }
  `);

  return data.allProductCategories;
}

export async function getFilterCategoriesProduct(id) {
  const data = await fetchCmsAPI(`
  {
    allProducts(filter: {category: {eq: "${id}"}}, orderBy: preco_DESC) {
      title
      preco
      productState
      slug
      featuredImage {
        url
      }
    }
  }
  `);

  return data.allProducts;
}





export default { getFeaturedProducts, getLastProducts, getCategories, getAllProducts, getFilterProducts, getCategoryProducts, getFilterCategories, getFilterCategoriesProduct }