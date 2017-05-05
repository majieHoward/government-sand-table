package com.howard.www.business.domain;

import java.io.Serializable;

import com.howard.www.core.base.util.FrameworkStringUtils;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import net.sf.json.JSONObject;
@Data
@Builder
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class QueryBssOrgEntity extends BaseBssOrgEntity implements Serializable{/**   
	 * @Fields serialVersionUID : TODO(用一句话描述这个变量表示什么)   
	 */  
	private static final long serialVersionUID = 1L;
	
	private String isParent;
	
	private String webix_kids;
	
	public QueryBssOrgEntity(JSONObject bssOrgData){
		/**
		 * "BSS_ORG_ID": 14138186,
        "IS_PARENT": "true",
        "BSS_ORG_NAME": "成都直属机构"
		 */
		this.setBssOgId(FrameworkStringUtils.asString(bssOrgData.get("BSS_ORG_ID")));
	    this.setId(FrameworkStringUtils.asString(bssOrgData.get("BSS_ORG_ID")));
	    this.setBssOrgName(FrameworkStringUtils.asString(bssOrgData.get("BSS_ORG_NAME")));
	    this.setIsParent(FrameworkStringUtils.asString(bssOrgData.get("IS_PARENT")));
	    this.setWebix_kids(FrameworkStringUtils.asString(bssOrgData.get("IS_PARENT")));
	}

}
