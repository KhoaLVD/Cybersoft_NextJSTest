export const fetchData = async () => {
    try {
      const result = await fetch("https://apistore.cybersoft.edu.vn/api/Product", {
        next: {
            revalidate: 10,
            
        }
      });
      const data = await result.json();
      return data.content;

    } catch (err) {
      console.log(err);
    }
  }

export const fetchDetail = async (id: string) => {
    try {
        const result = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`)
        const data = await result.json();
        return data.content;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchSearch = async (keyword: string) => {
    try {
        const result = await fetch(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`)
        const data = await result.json();
        return data.content;
    }
    catch (err) {
        console.log(err);
    }
}