import {environment} from "../../../environments/environment";
export class Config {
    static local = true;

    static get productServiceUrl() {
        if (this.local) {
            return "http://localhost:9004";
        }
        return "https://dev.xianfengzu.com/sms-product-service";
    };

    static orderServiceUrl = "http://localhost:9006";

    static get userServiceUrl() {
        if (this.local) {
            return "http://localhost:9003"
        }
        return "https://dev.xianfengzu.com/sms-currentUser-service";
    }

    static authenticationServiceUrl = "http://localhost:9012";
    static accountServiceUrl = "http://localhost:9000";
    // static authenticationServiceUrl="https://dev.xianfengzu.com/sms-authentication-service";
    static searchServiceUrl = "https://dev.xianfengzu.com/sms-search-service";
    static productSetServiceUrl = "https://dev.xianfengzu.com/sms-product-set-service";
    static categoryServiceUrl = "https://dev.xianfengzu.com/sms-category-service";
    static addressServiceUrl = "https://dev.xianfengzu.com/pms-address-service";
    static geoNamesServiceUrl = "https://dev.xianfengzu.com/pms-geonames-service";
    static token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkB4aWFuZmVuZ3p1LmNvbSIsImlzcyI6InhpYW5mZW5nenUuY29tIiwiaWF0IjoxNDc4ODA3NDU1LCJleHAiOjE0Nzg4OTM4NTUsInJvbGVzIjoxLCJpZCI6Mywid2FyZWhvdXNlX2lkIjo0fQ.fm-4aK7VCQuWiTjrUChbF1MpK9mGBWXd3kM_zxJOWLxg4vULv805b_C0S_gOYGXFqqIGA74KIzxYFJeOaMaTqA";
    static mediaServerUrl = "https://dev.xianfengzu.com/pms-media-service";

}