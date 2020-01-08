/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-14 21:17:50 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-15 21:08:12
    定位组件
 */
<template>
  <div style="position:relative" class="wraps-bosx">
    <section class="GetCode-boxs">
      <button @click="GetCode">点击定位</button>
      <!-- <select name="" id="1">
        <option value="">北京</option>
        <option value="">上海</option>
        <option value="">太原</option>
        <option value="">内蒙</option>
        <option value="">黑龙江</option>
      </select>-->
      <div class="GetCode-inp">
        <input type="text" placeholder="请输入详细地址" v-model="change" >
      </div>
    </section>
    <section v-show="shows" class="boxs">
      <p>您当前所在的位置是</p>
      <div v-if="!loadingActive">
        <p>省：{{provinceText}}</p>
        <p>市：{{cityText}}</p>
        <p>区/县：{{countyText}}</p>
        <p>详细地址：{{address}}</p>
      </div>
    </section>
    <p v-if="loadingActive">
      <img src="http://img95.699pic.com/photo/40103/3356.gif_wh300.gif" alt>
    </p>
    <ul class="addarrar">
      <li v-for="(item,index) in datachree" :key="index" @click="adddian(index)">{{item.name}}</li>
    </ul>
    <div class="foot" @click="Addres">添加地址</div>
  </div>
</template>
<script>
import { mkdirSync } from "fs";
import { constants } from "crypto";
export default {
  name: "orientation",
  components: {},
  data() {
    return {
      shows: false,
      loadingActive: false,
      provinceText: "", //省
      cityText: "", //市
      countyText: "", //区/县
      address: "", //详细地址
      areaText: "",
      change:"",
      datachree: []
    };
  },
  watch:{
    change(){
      this.autoOptions(this.change)
    }
  },
  methods: {
    GetCode() {
      this.loadingActive = true;
      let isRegeo = true;
      let map = true;
      let geolocation = true;
      map = new AMap.Map("container", { resizeEnable: true });
      map.plugin("AMap.Geolocation", () => {
        geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 1500,
          buttonOffset: new AMap.Pixel(10, 20),
          zoomToAccuracy: true,
          buttonPosition: "RB"
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", data => {
          sessionStorage.setItem("key", JSON.stringify(data.formattedAddress));
          this.$store.commit("addIncrement", data.formattedAddress);
          if (isRegeo) {
            this.regeocoder(
              [data.position.getLng(), data.position.getLat()],
              result => {
                if (result) {
                  this.areaText = "定位成功！";
                  setTimeout(() => {
                    this.loadingActive = false;
                    this.shows = true;
                  }, 1000);
                } else {
                  this.areaText = "定位失败,请稍后再试!";
                  setTimeout(() => {
                    this.loadingActive = false;
                  }, 1000);
                }
                this.provinceText = result.province; //省
                if (result.city == "") {
                  this.cityText = result.province; //市
                } else {
                  this.cityText = result.city;
                }
                this.countyText = result.district; //区/县
                this.address = result.address; //详细地址
              }
            );
          } else {
            complete(data.position.getLng(), data.position.getLat(), null);
          }
        });
        AMap.event.addListener(geolocation, "error", data => {
          alert("定位失败");
        });
      });
    },
    regeocoder(lnglatXY, complete) {
      let resultInfo = {};
      let geocoder = new AMap.Geocoder({ radius: 1000, extensions: "all" });
      geocoder.getAddress(lnglatXY, (status, result) => {
        if (status === "complete" && result.info === "OK") {
          let addressComponent = result.regeocode.addressComponent;
          let aois = result.regeocode.aois;
          let crosses = result.regeocode.crosses;
          let pois = result.regeocode.pois;
          let roads = result.regeocode.roads;
          let address = result.regeocode.formattedAddress;
          resultInfo.address = result.regeocode.formattedAddress;
          resultInfo.province = addressComponent.province;
          resultInfo.city = addressComponent.city;
          resultInfo.citycode = addressComponent.citycode;
          resultInfo.district = addressComponent.district;
          resultInfo.adcode = addressComponent.adcode;
          resultInfo.township = addressComponent.township;
          resultInfo.street = addressComponent.street;
          resultInfo.streetNumber = addressComponent.streetNumber;
          resultInfo.neighborhood = addressComponent.neighborhood;
          resultInfo.neighborhoodType = addressComponent.neighborhoodType;
          resultInfo.building = addressComponent.building;
          complete(resultInfo);
        }
      });
    },
    Addres() {
      this.$router.push("/login");
    },
    autoOptions(change) {
      AMap.plugin("AMap.Autocomplete", () => {
        var autoOptions = {
          city: "全国"
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(change, (status, result) => {
          this.datachree = result.tips;
        });
      });
    },
    adddian(index){
      console.log(index)
      
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.wraps-bosx {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .headers {
    width: 100%;
    height: 80px;
    font-size: 36px;
    text-align: center;
    line-height: 80px;
    font-weight: 500;
  }
  .GetCode-boxs {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    position: relative;
    .GetCode-inp {
      flex: 1;
      input {
        width: 300px;
        margin: 10px 50px;
      }
    }
  }
  .boxs {
    width: 100%;
    height: 300px;
    background: rgb(233, 233, 233);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    p {
      padding: 10px 0;
    }
  }
  .addarrar{
    width: 100%;
    height: 100%;
    overflow: hidden;
    li{
      padding:20px 0;
    }
  }
  span {
    color: #feb101;
  }
  button {
    background: #feb101;
    color: #fff;
    height: 60px;
    width: 130px;
    border: none;
    border-radius: 5px;
    outline: none;
  }
  button:active {
    opacity: 0.8;
  }
  .foot {
    width: 100%;
    height: 100px;
    font-size: 40px;
    border-top: 1px solid #ccc;
    text-align: center;
    line-height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>

