

export async function GET() {
    const restaurants = [
      {
        id: 1,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/PJBCTpK1/Rectangle-2.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 2,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/hv7Gy4gv/Rectangle-2-1.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 3,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/SQwLyJnZ/Rectangle-2-2.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 4,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/PJBCTpK1/Rectangle-2.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 5,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/hv7Gy4gv/Rectangle-2-1.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 6,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/SQwLyJnZ/Rectangle-2-2.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 7,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/PJBCTpK1/Rectangle-2.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 8,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/hv7Gy4gv/Rectangle-2-1.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 9,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/SQwLyJnZ/Rectangle-2-2.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 10,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/PJBCTpK1/Rectangle-2.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 11,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/hv7Gy4gv/Rectangle-2-1.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      },
      {
        id: 12,
        name: "Trattoria dall'Oste",
        rating: 4.5,
        image: "https://i.postimg.cc/SQwLyJnZ/Rectangle-2-2.png",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. Our menu is curated with a passion for culinary excellence, blending traditional recipes with modern innovation. Each dish tells a story of the freshest catches from local waters and beyond. With a commitment to quality, we ensure every meal is a masterpiece."
      }
    ];
  
    return new Response(JSON.stringify(restaurants), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  