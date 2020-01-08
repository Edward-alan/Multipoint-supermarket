import axios from "axios";

//获取banner 数据
export let banner = () => {
    const url = "/use/getList";
    return axios.get(url);
};

//获取每日鲜列表
export let getTit = () => {
    const url = "/use/getTit";
    return axios.get(url);
};

//验证登录
export let logins = phone => {
    const url = "/use/sendLogin";
    return axios.post(url, {
        phone
    });
};

export let loginVerify = phone => {
    const url = "/use/login";
    return axios.post(url, {
        phone
    });
};

//主页 必抢
export let getListzuo = () => {
    const url = "/use/getListzuo";
    return axios.get(url);
};

export let getListbai = () => {
    const url = "/use/getListbai";
    return axios.get(url);
};

export let getaddList = (page, pageSize, type) => {
    const url = "/use/products";
    return axios.post(url, {
        page,
        pageSize,
        type
    });
};

export let campus = campuseId => {
    const url = "/use/campus";
    return axios.post(url, {
        campuseId
    });
};

export let carList = () => {
    const url = "/use/carList";
    return axios.get(url);
};

//增加数据 地址
export let Insters = (name, address, phone, loaction) => {
    const url = "/use/Inster";
    return axios.post(url, {
        name,
        address,
        phone,
        loaction
    });
};

export let Carmenus = (title, many, img, num) => {
    const url = "/use/Caradd";
    return axios.post(url, {
        title,
        many,
        img,
        num
    });
};

export let addsele = () => {
    const url = "/use/addselects";
    return axios.get(url);
};

export let deteil = id => {
    const url = "/use/deteil";
    return axios.post(url, {
        id
    });
};


export let sousuos = names => {
    const url = "/use/sousoukan";
    return axios.post(url, {
        names
    });
};

