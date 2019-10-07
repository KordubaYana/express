class Utils {
  static formatDateTime = dt => {
    if (dt < 10) dt = "0" + dt;
    return dt;
  };

  static getDateTime = () => {
    const dt = new Date();
    const year = this.formatDateTime(dt.getFullYear());
    const month = this.formatDateTime(dt.getMonth() + 1);
    const day = this.formatDateTime(dt.getDate());
    const hours = this.formatDateTime(dt.getHours());
    const minutes = this.formatDateTime(dt.getMinutes());
    const seconds = this.formatDateTime(dt.getSeconds());

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  };
}

export default Utils;
