<template>
	<view>
		<view class="topBar">
			<uni-grid :column="5" :highlight="false" :showBorder="false" :square="false">
				<uni-grid-item v-for="(item, index) in iconsArray" :key="index" class="grid-item" @click="goOne(item)">
					<view class="grid-item-box" style="background-color: #fff;">
						<view class="grid-item-box-bg">
							<uni-icons custom-prefix="iconfont" :type="item.icon" :size="20" color="#777"
								class="grid-item-box-bg-icons" />
						</view>
						<text class="grid-item-box-text">{{item.tag}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>


		<view class="chooseBar">
			<uni-row class="demo-uni-row">
				<uni-col :span="5">
					<view class="demo-uni-col dark" style="font-weight: 700;">全部</view>
				</uni-col>
				<uni-col :span="6">
					<view class="demo-uni-col light">SMT</view>
				</uni-col>
				<uni-col :span="6">
					<view class="demo-uni-col light">组装车间</view>
				</uni-col>
				<uni-col :span="6">
					<view class="demo-uni-col light">包装车间</view>
				</uni-col>


			</uni-row>
		</view>

		<view class="listBar">
			<!-- 自定义 header -->
			<uni-row>
				<uni-col :span="6">
					<view class="slot-box-header">
						<image src="/static/logo.png" mode="widthFix" style="height: 100rpx;width: 100rpx;"></image>
					</view>
				</uni-col>
				<uni-col :span="10">
					<view class="slot-box-body">
						<h4>A-ONA|盛世通</h4>
						<p><text>关机</text></p>
						<p><text>当前人员: 无绑定</text></p>
					</view>
				</uni-col>
				<uni-col :span="8">
					<view class="slot-box-footer">
						<image src="/static/logo.png" mode="widthFix" style="height: 100rpx;width: 100rpx;"></image>
						<p><text>实时状态</text></p>
					</view>
				</uni-col>
			</uni-row>
		</view>

		<view class="listBar">
			<!-- 自定义 header -->
			<uni-row>
				<uni-col :span="6">
					<view class="slot-box-header">
						<image src="/static/logo.png" mode="widthFix" style="height: 100rpx;width: 100rpx;"></image>
					</view>
				</uni-col>
				<uni-col :span="10">
					<view class="slot-box-body">
						<h4>A-ONA|盛世通</h4>
						<p><text>关机</text></p>
						<p><text>当前人员: 无绑定</text></p>
					</view>
				</uni-col>
				<uni-col :span="8">
					<view class="slot-box-footer">
						<image src="/static/logo.png" mode="widthFix" style="height: 100rpx;width: 100rpx;"></image>
						<p><text>实时状态</text></p>
					</view>
				</uni-col>
			</uni-row>
		</view>

		<view class="listBar">
			<!-- 自定义 header -->
			<uni-row>
				<uni-col :span="6">
					<view class="slot-box-header">
						<image src="/static/logo.png" mode="widthFix" style="height: 100rpx;width: 100rpx;"></image>
					</view>
				</uni-col>
				<uni-col :span="10">
					<view class="slot-box-body">
						<h4>A-ONA|盛世通</h4>
						<p><text>关机</text></p>
						<p><text>当前人员: 无绑定</text></p>
					</view>
				</uni-col>
				<uni-col :span="8">
					<view class="slot-box-footer">
						<image src="/static/logo.png" mode="widthFix" style="height: 100rpx;width: 100rpx;"></image>
						<p><text>实时状态</text></p>
					</view>
				</uni-col>
			</uni-row>
		</view>
		<view class="listBar">
			<!-- 自定义 header -->
			<uni-row>
				<uni-col :span="6">
					<view class="slot-box-header">
						<image src="/static/logo.png" mode="widthFix" style="height: 100rpx;width: 100rpx;"></image>
					</view>
				</uni-col>
				<uni-col :span="10">
					<view class="slot-box-body">
						<h4>A-ONA|盛世通</h4>
						<p><text>关机</text></p>
						<p><text>当前人员: 无绑定</text></p>
					</view>
				</uni-col>
				<uni-col :span="8">
					<view class="slot-box-footer">
						<image src="/static/logo.png" mode="widthFix" style="height: 100rpx;width: 100rpx;"></image>
						<p><text>实时状态</text></p>
					</view>
				</uni-col>
			</uni-row>
		</view>

	</view>

</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	//图标
	const iconsArray = reactive([{

			tag: '实时状态',
			icon: 'icon-svg-'
		}, {
			tag: '小时产量',
			icon: 'icon-shengchanliangtongji'
		}, {
			tag: 'OEE分析',
			icon: 'icon-shujufenxi-liuliangfenxi'
		}, {
			tag: '异常分析',
			icon: 'icon-yuexianyichangfenxi'
		},
		{
			tag: '安灯考核',
			icon: 'icon-kaohe'
		},
		{
			tag: '上班打卡',
			icon: 'icon-kaoqindaqia'
		},
		{
			tag: '人效考核',
			icon: 'icon-wodekaohe'
		},
		{
			tag: '班次管理',
			icon: 'icon-a-Calendarshift'
		},
		{
			tag: '微信提醒',
			icon: 'icon-weixin'
		},
		{
			tag: '扫互联灯',
			icon: 'icon-huandengpao'
		}
	])
	const goOne = item => {
		uni.navigateTo({ url: '/pages/kaohe/kaohe' })
	}
</script>

<style lang="less" scoped>
	.slot-box-header {
		height: 150rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.slot-box-body {
		height: 150rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-self: flex-start;
	}

	.slot-box-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 15rpx;
		flex-direction: column;
		height: 150rpx;
		font-size: 20rpx;
	}



	.listBar {
		width: 100%;
		height: 170rpx;
		background-color: white;
		margin-bottom: 10rpx;
	}

	.topBar {
		padding-top: 20rpx;
		background-color: white;
	}

	.grid-item {
		margin-bottom: 20rpx;

		&-box {
			display: flex;
			flex-direction: column;
			margin: auto auto;
			box-sizing: border-box;

			&-bg {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100rpx;
				height: 100rpx;
				background-color: #eee;
				border-radius: 100rpx;
			}


			&-text {
				text-align: center;
				padding-top: 10rpx;
				font-size: 18rpx !important;
			}

		}

	}

	.chooseBar {
		font-size: 30rpx;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
	}
</style>