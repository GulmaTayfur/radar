import moment from "moment/moment";
import "moment/locale/tr";

moment;
// unix formatındaki veriyi normal formata çeviren fonksiyon

const formatDate = (unix_time) => {
  // unix formatindaki saniye verisini date ile kullanabilmek için 1000 ile çarpıp milisaniyeye çevirdik
  const date = new Date(unix_time * 1000);
  moment.locale("tr");
  // veriyi formatla
  return moment(date).calendar();
};

export default formatDate;
