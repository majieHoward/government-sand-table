package com.howard.www.business.service.impl;

import java.util.Vector;
import java.util.concurrent.CountDownLatch;
import org.springframework.context.ApplicationContext;
import com.howard.www.business.domain.QueryBssOrgEntity;
import net.sf.json.JSONObject;

public class StructureBssOrgTreeItem extends Thread {
	private CountDownLatch latch;
	private JSONObject bssOrgItemData;
	private Vector<QueryBssOrgEntity> bssOrgItems;
	private ApplicationContext cApplicationContext;

	public StructureBssOrgTreeItem(CountDownLatch latch, JSONObject bssOrgItemData,
			Vector<QueryBssOrgEntity> bssOrgItems, ApplicationContext cApplicationContext) {
		this.latch = latch;
		this.bssOrgItemData = bssOrgItemData;
		this.bssOrgItems = bssOrgItems;
		this.cApplicationContext = cApplicationContext;
	}

	private void structureData() throws Exception {
		bssOrgItems.add(new QueryBssOrgEntity(bssOrgItemData));
	}

	public void run() {
		try {
			structureData();
		} catch (Exception e) {
			e.printStackTrace();
		}
		latch.countDown();
	}

}
