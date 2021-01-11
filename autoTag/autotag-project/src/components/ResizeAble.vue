<!--
/*
  组件说明：
  <resize-able 
      :parentRef="parentRef">
      <button>button</button>
  </resize-able>
  参数说明：
    parentContainer是移动区域目标元素的ref值
  例子: 
    <div class="draggable-container" 
        ref="parentRef">
      <resize-able 
        parentRef="parentRef">
        <button>my btn</button>
      </resize-able>
    </div>
*/
-->
<template>
  <div>
    <slot></slot>
    <div
      ref="targetBox"
      class="target-box"
      data-aim="canMove"
      :class="boxSelected ? `box-click target-can-move` : ``"
    >
      <div
        :class="boxSelected ? 'box-ball' : ''"
        v-for="item in 8"
        :data-i="item"
        :key="item"
      ></div>
      <div v-if="boxSelected" class="box-details">
        <div>x: {{ boxElement.left }}px</div>
        <div>y: {{ boxElement.top }}px</div>
        <div>width: {{ boxElement.width }}px</div>
        <div>height: {{ boxElement.height }}px</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted, getCurrentInstance, toRaw } from "vue";
export default {
  props: {
    // 外容器的ref
    parentRef: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const slot = ref(null);
    const parentClass = ref("");
    // 初始化
    const boxElement = reactive({
      width: 100,
      height: 100,
      left: 20,
      top: 20,
    });
    // 外层容器宽高
    const containerSize = toRaw({
      containerWidth: 0,
      containerHeigth: 0,
    });
    // 获取dom节点
    const targetBox = ref(null);
    // 点击的球球是哪个
    const ballIdx = ref(0);
    const boxSelected = ref(false);
    const mouseResizeDown = ref(false);
    const mouseMove = ref(false);
    const boxActive = function (e) {
      if (e.target.className !== parentClass.value) {
        boxSelected.value = true;
      } else {
        boxSelected.value = false;
      }
    };
    const handleDown = function (e) {
      if (boxSelected.value) {
        ballIdx.value = e.target.dataset.i;
        if (ballIdx.value && ballIdx.value <= 8) {
          mouseResizeDown.value = true;
          return;
        }
        if (e.target.dataset.aim) {
          mouseMove.value = true;
          return;
        }
      }
    };
    const handleMove = function (e) {
      if (mouseResizeDown.value) {
        // 对照的容器
        const contrast = e.target.className;
        // 需要屏蔽小球的宽高bug
        if (e.offsetX <= 8 || e.offsetY <= 8) {
          return;
        }
        // 拖动不能小于原来的大小
        if (ballIdx.value) {
          handleResize(contrast, ballIdx.value, e.offsetX, e.offsetY);
        }
      } else if (mouseMove.value) {
        move(e.movementX, e.movementY);
      }
    };
    const handleUp = function (e) {
      mouseResizeDown.value = false;
      mouseMove.value = false;
    };
    function updateStyle() {
      const style = `
        width: ${boxElement.width}px; 
        height: ${boxElement.height}px;
        left: ${boxElement.left}px;
        top: ${boxElement.top}px;
      `;
      targetBox.value.style = style;
      slot.value.style = style + `position: absolute;`;
    }
    // 移动目标元素
    function move(movementX, movementY) {
      if (
        boxElement.width + boxElement.left + movementX >
        containerSize.containerWidth
      ) {
        movementX = 0;
      }
      if (
        boxElement.height + boxElement.top + movementY >
        containerSize.containerHeigth
      ) {
        movementY = 0;
      }
      boxElement.left += movementX;
      boxElement.top += movementY;
      boxElement.left = boxElement.left < 0 ? 0 : boxElement.left;
      boxElement.top = boxElement.top < 0 ? 0 : boxElement.top;
      updateStyle();
    }
    // 根据不同的球移动对容器拉伸收缩
    function handleResize(contrast, currentBall, offsetX, offsetY) {
      if (currentBall === "8") {
        if (contrast === parentClass.value) {
          boxElement.width = offsetX - boxElement.left;
          boxElement.height = offsetY - boxElement.top;
        } else {
          boxElement.width = offsetX;
          boxElement.height = offsetY;
        }
      } else if (currentBall === "7") {
        if (contrast === parentClass.value) {
          boxElement.height = offsetY - boxElement.top;
        } else {
          boxElement.height = offsetY;
        }
      } else if (currentBall === "6") {
        if (contrast === parentClass.value) {
          boxElement.height = offsetY - boxElement.top;
          const gapX = boxElement.left - offsetX;
          boxElement.width = gapX + boxElement.width;
          boxElement.left = boxElement.left - gapX;
        } else {
          boxElement.width = boxElement.width - offsetX;
          boxElement.left = boxElement.left + offsetX;
          boxElement.height = offsetY;
        }
      } else if (currentBall === "5") {
        if (contrast === parentClass.value) {
          boxElement.width = offsetX - boxElement.left;
        } else {
          boxElement.width = offsetX;
        }
      } else if (currentBall === "4") {
        if (contrast === parentClass.value) {
          const gapX = boxElement.left - offsetX;
          boxElement.width = gapX + boxElement.width;
          boxElement.left = boxElement.left - gapX;
        } else {
          boxElement.width = boxElement.width - offsetX;
          boxElement.left = boxElement.left + offsetX;
        }
      } else if (currentBall === "3") {
        if (contrast === parentClass.value) {
          boxElement.width = offsetX - boxElement.left;
          const gapY = boxElement.top - offsetY;
          boxElement.height = gapY + boxElement.height;
          boxElement.top = boxElement.top - gapY;
        } else {
          boxElement.width = offsetX;
          boxElement.height = boxElement.height - offsetY;
          boxElement.top = boxElement.top + offsetY;
        }
      } else if (currentBall === "2") {
        if (contrast === parentClass.value) {
          boxElement.height = boxElement.top - offsetY + boxElement.height;
          boxElement.top = offsetY;
        } else {
          boxElement.height = boxElement.height - offsetY;
          boxElement.top = boxElement.top + offsetY;
        }
      } else if (currentBall === "1") {
        if (contrast === parentClass.value) {
          const gapX = boxElement.left - offsetX;
          boxElement.width = gapX + boxElement.width;
          boxElement.left = boxElement.left - gapX;
          boxElement.height = boxElement.height + boxElement.top - offsetY;
          boxElement.top = offsetY;
        } else {
          boxElement.width = boxElement.width - offsetX;
          boxElement.left = boxElement.left + offsetX;
          boxElement.height = boxElement.height - offsetY;
          boxElement.top = boxElement.top + offsetY;
        }
      }
      updateStyle();
    }
    // 给外层容器添加鼠标事件
    function bindMouseEvent(container) {
      // 支持现代浏览器
      containerSize.containerWidth = parseInt(
        window.getComputedStyle(container, null).width
      );
      containerSize.containerHeigth = parseInt(
        window.getComputedStyle(container, null).height
      );
      container.addEventListener("click", boxActive);
      container.addEventListener("mousedown", handleDown);
      container.addEventListener("mousemove", handleMove);
      container.addEventListener("mouseup", handleUp);
    }
    onMounted(() => {
      const container = getCurrentInstance().parent.refs[props.parentRef];
      parentClass.value = container.className;
      container.style = `
        position: relative;
        overflow: auto;
      `;
      bindMouseEvent(container);
      slot.value = getCurrentInstance().refs[
        "targetBox"
      ].previousElementSibling;
      slot.value.style = `
        position: absolute;
        top: 10px;
        left: 10px;
        box-sizing: border-box;
      `;
      const insideSlot = slot.value.children && slot.value.children;
      for (let i = 0; i < insideSlot.length; i++) {
        insideSlot[i].style = `
          position: relative;
          z-index: 3;
        `;
      }

      // 获取宽高
      const slotStyle = window.getComputedStyle(slot.value, null);
      boxElement.width = parseInt(slotStyle.width);
      boxElement.height = parseInt(slotStyle.height);
      boxElement.left = parseInt(slotStyle.left);
      boxElement.top = parseInt(slotStyle.top);
      getCurrentInstance().refs["targetBox"].style = `
        width: ${boxElement.width + 2}px;
        height: ${boxElement.height + 2}px;
        left: ${boxElement.left - 1}px;
        top: ${boxElement.top - 1}px;
      `;
    });
    return {
      boxElement,
      boxActive,
      mouseResizeDown,
      boxSelected,
      handleDown,
      handleMove,
      handleUp,
      targetBox,
    };
  },
};
</script>
<style scoped>
.target-box {
  display: block;
  box-sizing: border-box;
  position: absolute;
  left: 100px;
  top: 20px;
}
.target-can-move {
  cursor: all-scroll;
}
.box-click {
  border: 1px solid blue;
}
.box-details {
  position: absolute;
  bottom: -70px;
  font-size: 13px;
  text-align: left;
}
.box-ball {
  width: 8px;
  height: 8px;
  border: 1px solid blue;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
}
.box-ball:nth-child(1) {
  top: -8px;
  left: -8px;
  cursor: nw-resize;
}
.box-ball:nth-child(2) {
  top: -8px;
  left: calc(50% - 4px);
  cursor: n-resize;
}
.box-ball:nth-child(3) {
  top: -8px;
  right: -8px;
  cursor: nesw-resize;
}
.box-ball:nth-child(4) {
  top: calc(50% - 4px);
  left: -8px;
  cursor: w-resize;
}
.box-ball:nth-child(5) {
  top: calc(50% - 4px);
  right: -8px;
  cursor: w-resize;
}
.box-ball:nth-child(6) {
  left: -8px;
  bottom: -8px;
  cursor: nesw-resize;
}
.box-ball:nth-child(7) {
  left: calc(50% - 4px);
  bottom: -8px;
  cursor: n-resize;
}
.box-ball:nth-child(8) {
  right: -8px;
  bottom: -8px;
  cursor: nw-resize;
}
</style>