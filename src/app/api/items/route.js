
export async function GET() {
    const items = [
      {
        "id": 1,
        "name": "The Book",
        "description": "Delicouse tackos, appetizing...",
        "price": 15.99,
        "image": "https://i.postimg.cc/c1DnknRB/Image-10.png"
      },
      {
        "id": 2,
        "name": "The Book",
        "description": "Delicouse tackos, appetizing...",
        "price": 15.99,
        "image": "https://i.postimg.cc/c1DnknRB/Image-10.png"
      },
      {
        "id": 3,
        "name": "Long Sleeve T-Shirt",
        "description": "A stylish and comfortable long sleeve t-shirt.",
        "price": 25.99,
        "image": "https://i.postimg.cc/bNgp9x1q/Image-7.png"
      },
      {
        "id": 4,
        "name": "Long Sleeve T-Shirt",
        "description": "A stylish and comfortable long sleeve t-shirt.",
        "price": 25.99,
        "image": "https://i.postimg.cc/bNgp9x1q/Image-7.png"
      },
      {
        "id": 5,
        "name": "Long Sleeve T-Shirt",
        "description": "A stylish and comfortable long sleeve t-shirt.",
        "price": 25.99,
        "image": "https://i.postimg.cc/bNgp9x1q/Image-7.png"
      },
      {
        "id": 6,
        "name": "Long Sleeve T-Shirt",
        "description": "A stylish and comfortable long sleeve t-shirt.",
        "price": 25.99,
        "image": "https://i.postimg.cc/bNgp9x1q/Image-7.png"
      },
      {
        "id": 7,
        "name": "Long Sleeve T-Shirt",
        "description": "A stylish and comfortable long sleeve t-shirt.",
        "price": 25.99,
        "image": "https://i.postimg.cc/bNgp9x1q/Image-7.png"
      },
      {
        "id": 8,
        "name": "Long Sleeve T-Shirt",
        "description": "A stylish and comfortable long sleeve t-shirt.",
        "price": 25.99,
        "image": "https://i.postimg.cc/bNgp9x1q/Image-7.png"
      },
      {
        "id": 9,
        "name": "Long Sleeve T-Shirt",
        "description": "A stylish and comfortable long sleeve t-shirt.",
        "price": 25.99,
        "image": "https://i.postimg.cc/bNgp9x1q/Image-7.png"
      },
      {
        "id": 10,
        "name": "Long Sleeve T-Shirt",
        "description": "A stylish and comfortable long sleeve t-shirt.",
        "price": 25.99,
        "image": "https://i.postimg.cc/bNgp9x1q/Image-7.png"
      },
      {
        "id": 11,
        "name": "Crazy tacko",
        "description": "A fun and quirky crazy taco-themed item.",
        "price": 12.99,
        "image": "https://i.postimg.cc/FR4B6qQ8/Image-8.png"
      },
      {
        "id": 12,
        "name": "Crazy tacko",
        "description": "A fun and quirky crazy taco-themed item.",
        "price": 12.99,
        "image": "https://i.postimg.cc/FR4B6qQ8/Image-8.png"
      },
      {
        "id": 13,
        "name": "Crazy Toy",
        "description": "An exciting and entertaining crazy toy for all ages.",
        "price": 18.99,
        "image": "https://i.postimg.cc/Hsz887xy/Image-9.png"
      },
      {
        "id": 14,
        "name": "Crazy Toy",
        "description": "An exciting and entertaining crazy toy for all ages.",
        "price": 18.99,
        "image": "https://i.postimg.cc/Hsz887xy/Image-9.png"
      },
      {
        "id": 15,
        "name": "Crazy Toy",
        "description": "An exciting and entertaining crazy toy for all ages.",
        "price": 18.99,
        "image": "https://i.postimg.cc/Hsz887xy/Image-9.png"
      }
    ];
  
    return new Response(JSON.stringify(items), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  