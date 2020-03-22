package com.algorithm_factory;


import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String index(ModelMap model) {
		model.addAttribute("content", "welcome");
		return "index";
	}
	
	@RequestMapping("/insertionSort")
	public String insertionSortView(ModelMap model) {
		model.addAttribute("content", "insertionSort");
		model.addAttribute("displayInsertionSort", true);
		return "index";
	}
	
	@RequestMapping("/bubbleSort")
	public String bubbleSortView(ModelMap model) {
		model.addAttribute("content", "bubbleSort");
		model.addAttribute("displayBubbleSort", true);
		return "index";
	}
	
	@RequestMapping("/quickSort")
	public String quickSortView(ModelMap model) {
		model.addAttribute("content", "quickSort");
		model.addAttribute("displayQuickSort", true);
		return "index";
	}
	
	@RequestMapping("/mergeSort")
	public String mergeSortView(ModelMap model) {
		model.addAttribute("content", "mergeSort");
		model.addAttribute("displayMergeSort", true);
		return "index";
	}
}
